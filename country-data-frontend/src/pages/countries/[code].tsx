import { useRouter } from 'next/router';

export default function CountryPage(){
    const router = useRouter();
    // Get the country code from the URL
    const { code } = router.query;

    return (
        <div>
          <h1>Country: {code}</h1>
        </div>
      );
}

