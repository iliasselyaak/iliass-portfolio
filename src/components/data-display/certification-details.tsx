import Image from 'next/image';

import { CertificationDetails as CertificationDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const CertificationDetails = ({
  name,
  issuer,
  date,
  credentialId,
  url,
  logo,
}: CertificationDetailsProps) => {
  return (
    <Card className="flex flex-col items-center gap-4 p-6 h-full">
      {logo && (
        <Image 
          src={logo} 
          alt={`${issuer} logo`}
          width={60}
          height={60}
          className="object-contain"
        />
      )}
      <Typography variant="subtitle" className="text-center font-semibold text-gray-900 text-sm">
        {name}
      </Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography className="w-full text-center font-medium text-sm">
          {issuer}
        </Typography>
        <Typography variant="body3" className="w-full text-center text-gray-600">
          {new Intl.DateTimeFormat('en-UK', dateFormatOptions).format(date)}
        </Typography>
        {credentialId && (
          <Typography variant="body3" className="w-full text-center text-gray-500">
            ID: {credentialId}
          </Typography>
        )}
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-center text-blue-600 hover:text-blue-800 underline text-sm"
          >
            View Credential
          </a>
        )}
      </div>
    </Card>
  );
};

export default CertificationDetails;