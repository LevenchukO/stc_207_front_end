import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss"

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('Сторінка не знайдена')}
    </div>
  );
};