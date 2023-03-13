import { type ChangeEvent, useRef, useState } from 'react'
import { updateProfilePhoto } from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'
import { type FetcherFunc } from '../types'

export default function ProfilePictureModel(fetcher: FetcherFunc) {
  const newImgRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onImageEditHandler = () => {
    newImgRef.current!.click()
  }

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    const result = await updateProfilePhoto(e.target.files![0])
    setIsLoading(false)

    if (!result) return

    callToast(result)
    await fetcher()
  }

  return {
    newImgRef,
    onImageEditHandler,
    onFileChange,
    isLoading
  }
}
