import { type ChangeEvent, useRef } from 'react'
import { updateProfilePhoto } from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'
import { type FetcherFunc } from '../types'

export default function ProfilePictureModel(fetcher: FetcherFunc) {
  const newImgRef = useRef<HTMLInputElement>(null)

  const onImageEditHandler = () => {
    newImgRef.current!.click()
  }

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const result = await updateProfilePhoto(e.target.files![0])

    if (!result) return

    callToast(result)
    await fetcher()
  }

  return {
    newImgRef,
    onImageEditHandler,
    onFileChange
  }
}
