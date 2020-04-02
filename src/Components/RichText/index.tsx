import React, { useEffect, useRef, useState } from 'react'

interface IProps {
    onEnter: (value: string) => void
}

const RichText: React.FC<IProps> = (props) => {
    const [value, setValue] = useState('')
    const [isFocus, setIsFocus] = useState(false)
    const textareaElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (textareaElement.current) {
            const mutationObserver = new MutationObserver(handleOnElementChange)
            mutationObserver.observe(textareaElement.current, {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true
            })
        }

    }, [textareaElement])

    function handleOnElementChange() {
        if (textareaElement.current) {
            setValue(textareaElement.current.innerHTML)
            textareaElement.current.focus()
        }
    }

    function handleOnFocus() {
        setIsFocus(true)
    }

    function handleOnBlur() {
        setIsFocus(false)
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (isFocus && e.keyCode === 13){
            props.onEnter(value)
            setValue('')
            setTimeout(() => {
                textareaElement.current && (textareaElement.current.innerHTML = '')
            }, 0)

        }
    }

    return (
        <div
            ref={textareaElement}
            className="textarea"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            onChange={handleOnElementChange}
            contentEditable={true}
        />
    )
}

export default RichText