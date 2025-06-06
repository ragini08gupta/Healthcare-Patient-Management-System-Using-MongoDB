import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='px-6 py-16 max-w-7xl mx-auto flex flex-col items-center justify-center'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;