import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import cn from 'classnames';
import { FunctionComponent } from 'react';

const Layout  = ({ children }: LayoutProps): JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
                <div className={styles.body}>
                    { children }
                </div>
            <Footer className={styles.footer} />
        </div>
    ); 
};

//may be placed in a separate file
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};