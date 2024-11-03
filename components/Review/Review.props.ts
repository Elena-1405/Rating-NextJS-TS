import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { ReviewModel } from '../../interfaces/product.interface';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    review: ReviewModel;
}