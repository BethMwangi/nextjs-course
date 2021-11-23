import router, { useRouter } from 'next/router';

function ClientsProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    //load data
    router.push('/clients/max/projecta');
  }
    return (
      <div>
        <h1>The projects of a given  page</h1>
      </div>
    );
  }
  
  export default ClientsProjectsPage;
  