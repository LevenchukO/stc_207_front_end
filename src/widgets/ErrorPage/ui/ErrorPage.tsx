import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ErrorPage.module.scss"
import { Button } from "shared/ui/Button/Button"

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({className}: ErrorPageProps) => {

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>Error occured!!!</p>
            <Button onClick={reloadPage}>
                Resset Page
            </Button>
        </div>
    )
}