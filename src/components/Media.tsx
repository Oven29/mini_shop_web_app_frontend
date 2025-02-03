import { useEffect, useState } from "react";
import { Media } from "../services/schemas";
import { mediaService } from "../services/mediaService";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function MediaComponent(
  props: { className?: string, alt: string, media: Media }
) {
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mediaService.getFileUrl(props.media.media_id!);
        setMediaUrl(data.url!);
      } finally {
        setIsLoading(false);
      }
    }

    if (props.media.url) {
      setMediaUrl(props.media.url);
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, [])

  if (isLoading) {
    return <ImagePlaceholder />
  }

  return (
    <img src={mediaUrl} alt={props.alt} className={props.className || ''} />
  )
}
