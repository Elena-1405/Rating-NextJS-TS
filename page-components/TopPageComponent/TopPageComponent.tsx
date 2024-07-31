import styles from './P.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <>
            <div tag=''>{page.title}</div> 
            { products && products.length }
        </>
    );      
};