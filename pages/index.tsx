import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag, Button, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';


function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
      <>
          <Htag tag='h1'>text</Htag>
          <Button appearance='primary' arrow='right'>text</Button>
          <Button appearance='ghost' arrow='down'>text</Button>
          <P size='s'>Some s text</P>
          <P size='m'>Some m text</P>
          <P size='l'>Some l text</P>
          <Tag size='m' color='red'>This is a red tag</Tag>
          <Tag size='s' color='green'>This is a green tag</Tag>
          <Tag size='m' color='ghost'>This is a ghost tag</Tag>
          <Rating rating={rating} isEditable setRating={setRating}/>
          <Input placeholder='имя'/>
          <Textarea placeholder='отзыв'/>
      </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async() => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return{
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

