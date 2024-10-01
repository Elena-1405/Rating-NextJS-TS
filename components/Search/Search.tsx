import { useState, KeyboardEvent } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';
import styles from './Search.module.css';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input 
                className={styles.input}
                placeholder='Поиск'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button 
                appearance='primary'
                className={styles.button}//не видит стили в css. To solve
                onClick={goToSearch}
                style={{position: 'absolute', //temporary
                    top: '3px',
                    right: '3px',
                    width: '30px',
                    height: '30px',
                    padding: '7px'}}
            >
                <GlassIcon />
            </Button>
        </div>
    );      
};
