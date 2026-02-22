import { useState, useEffect, useRef } from 'react'
import { TYPED_PHRASES } from '../data'

export function useTyping() {
    const [display, setDisplay] = useState('')
    const phraseIdx = useRef(0)
    const charIdx = useRef(0)
    const isDeleting = useRef(false)

    useEffect(() => {
        let timeout

        const type = () => {
            const phrase = TYPED_PHRASES[phraseIdx.current]

            if (isDeleting.current) {
                charIdx.current--
                setDisplay(phrase.substring(0, charIdx.current))
            } else {
                charIdx.current++
                setDisplay(phrase.substring(0, charIdx.current))
            }

            const speed = isDeleting.current ? 45 : 80

            if (!isDeleting.current && charIdx.current === phrase.length) {
                timeout = setTimeout(() => {
                    isDeleting.current = true
                    type()
                }, 1800)
                return
            }

            if (isDeleting.current && charIdx.current === 0) {
                isDeleting.current = false
                phraseIdx.current = (phraseIdx.current + 1) % TYPED_PHRASES.length
            }

            timeout = setTimeout(type, speed)
        }

        timeout = setTimeout(type, 600)
        return () => clearTimeout(timeout)
    }, [])

    return display
}
