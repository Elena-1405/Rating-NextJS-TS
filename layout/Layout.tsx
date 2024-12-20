import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import cn from 'classnames';
import { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';

const Layout  = ({ children }: LayoutProps): JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
                <div className={styles.body}>
                    { children }
                </div>
            <Footer className={styles.footer} />
            <Up />
        </div>
    ); 
};

//may be placed in a separate file
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} >
                <Layout>
                 <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};
