import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors}, reset, clearErrors } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId})
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так.')
            }
        } catch (e: any) {
            setIsError(e.message)
        }   
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div 
                className={cn(styles.reviewForm, className)}
                {...props}
            >
                <Input 
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })} 
                    placeholder='Имя'
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.name ? true : false}
                    />
                <Input 
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })} 
                    placeholder='Заголовок отзыва' 
                    className={styles.title}
                    error={errors.title} 
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={errors.title ? true : false}
                    />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller 
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Поставьте оценку' } }}
                        render={({ field }) => (
                            <Rating 
                                isEditable 
                                rating={field.value} 
                                ref={field.ref} 
                                setRating={field.onChange}
                                error={errors.rating}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea 
                    {...register('description', { required: { value: true, message: 'Заполните текст отзыва' } })} 
                    placeholder='Текст отзыва' 
                    className={styles.description}
                    error={errors.description}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label='Текст отзыва'
                    aria-invalid={errors.description ? true : false}
                    
                />
                <div className={styles.submit}>
                    <Button appearance='primary' tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors() }>Отправить</Button>
                    <span className={styles.info}>*Отзыв пройдет модерацию перед публикацией</span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)} role='alert'>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, Ваш отзыв будет опубликован после проверки.
                </div>
                <button 
                    className={styles.close} 
                    onClick={() => setIsSuccess(false)}
                    aria-label='Закрыть оповещение'
                > 
                    <CloseIcon />
                </button>     
            </div>}
            {isError && <div className={cn(styles.error, styles.panel)} role='alert'>
                Что-то пошло не так. Попробуйте обновить страницу!
                <button 
                    className={styles.close} 
                    onClick={() => setIsError(undefined)}
                    aria-label='Закрыть оповещение'
                > 
                    <CloseIcon />
                </button> 
            </div>}
        </form>
    );      
};