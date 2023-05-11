import React, { FC, memo, useEffect } from 'react'
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
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import styles from './ArticleDetails.module.scss'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
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
    console.log('article:', article)
    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true
    const error = useSelector(getArticleDetailsError)

    useEffect(() => {
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
        <div>
          <Text title="Article" />
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
