import styles from './TopPageComponents.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, HhData } from '../../components';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag> 
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <span>Sort</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag> 
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            <HhData {...page.hh} />
        </div>
    );      
};