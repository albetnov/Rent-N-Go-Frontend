import { type ChangeEvent, useRef } from 'react'
import { updateProfilePhoto } from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'

export default function ProfilePictureModel(fetcher: () => Promise<void>) {
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
