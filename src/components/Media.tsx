import { useEffect, useState } from "react";
import { Media } from "../services/schemas";
import { mediaService } from "../services/mediaService";
import ImagePlaceholder from "./icons/ImagePlaceholder";

export default function MediaComponent(
  props: { className?: string, alt: string, media: Media }
) {
  const className = props.className || '';

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
    return (
      <div className={className}>
        <ImagePlaceholder />
      </div>
    )
  }

  return (
    <img src={mediaUrl} alt={props.alt} className={className} />
  )
}
