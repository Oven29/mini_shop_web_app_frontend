import { useEffect, useState } from 'react'
import LoadingSpineer from '../components/icons/LoadingSpineer'
import '../main.css'

export default function LoadingPage() {
  const loadingHints: Array<string> = ['Загрузка', 'Загрузка.', 'Загрузка..', 'Загрузка...'];
  const [loadingHint, setLoadingHint] = useState<string>(loadingHints[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingHint((value: string) => {
        let i = loadingHints.indexOf(value);
        i = i === loadingHints.length - 1 ? 0 : i + 1;
        return loadingHints[i]
      })
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className="h-[40vh] w-[40vw] mt-[30vh] ml-[30vw] flex flex-col items-center justify-center">
      <LoadingSpineer />
      <span className="grid justify-items-center text-[20px] font-bold">
        {loadingHint}
      </span>
    </div>
  )
}
