import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";

interface BugButtonProps {
    className?: string
}
// test component
export const BugButton = ({className}: BugButtonProps) => {

    const [error, setError] = useState(false)

    const throwErrorTrigger = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error 
        }
        
    }, [error])

    return (
        <Button onClick={throwErrorTrigger}>
            throw error
        </Button>
    )
}