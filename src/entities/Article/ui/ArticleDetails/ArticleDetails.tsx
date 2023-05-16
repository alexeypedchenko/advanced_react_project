import React, { FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from '../../model/selectors/getArticleDetails'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import styles from './ArticleDetails.module.scss'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'

import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

interface ArticleDetailsProps {
  id: string
  className?: ''
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ id, className }) => {
    const dispatch = useAppDispatch()

    const article = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlockComponent key={block.id} block={block} />
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlockComponent key={block.id} block={block} />
        case ArticleBlockType.TEXT:
          return <ArticleTextBlockComponent key={block.id} block={block} />
        default:
          return null
      }
    }, [])

    useEffect(() => {
      if (__PROJECT__ === 'storybook') {
        return
      }

      dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
      content = (
        <div className={styles.skeleton}>
          <Skeleton
            className={styles.avatar}
            width={200}
            height={200}
            radius="50%"
          />
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width={'100%'} height={200} />
          <Skeleton width={'100%'} height={200} />
        </div>
      )
    } else if (error) {
      content = <Text align="center" theme={TextTheme.ERROR} title={error} />
    } else {
      content = (
        <div className={styles.articleInfo}>
          <Avatar className={styles.avatar} size={200} src={article?.img} />
          <Text title={article?.title} text={article?.subtitle} size="lg" />
          <div className={styles.info}>
            <Icon svg={EyeIcon} />
            <Text text={`${article?.views}`} />
          </div>
          <div className={styles.info}>
            <Icon svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </div>
          <div className={styles.blocks}>
            {article?.blocks.map(renderBlock)}
          </div>
        </div>
      )
    }

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(styles.article, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    )
  }
)
