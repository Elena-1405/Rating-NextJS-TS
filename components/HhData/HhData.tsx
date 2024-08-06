import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import cn from 'classnames';
import { Card } from '..';

export const HhData = ({ count }: HhDataProps): JSX.Element => {
    return(
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.salaryValue}>{count}</div>
                <div className={styles.rate}>{count}</div>
            </Card>
        </div> 
    );    
};