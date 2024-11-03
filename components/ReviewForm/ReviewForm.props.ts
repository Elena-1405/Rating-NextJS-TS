import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    productId: string;
}