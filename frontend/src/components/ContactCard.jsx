import { Mail, MapPin, Phone, Globe, Building2, Pencil } from 'lucide-react';

function ContactCard({ contact }) {
  return (
    <div className="flex w-full max-w-xl bg-white shadow-md rounded-2xl overflow-hidden mb-6">
      <div className="w-1/3 bg-gradient-to-b from-rose-200 to-white flex items-center justify-center p-4">
        {contact.avatar?.startsWith('http') ? (
          <img
            src={contact.avatar}
            alt={contact.name}
            className="rounded-full w-24 h-24 object-cover"
          />
        ) : (
          <div className="text-4xl font-bold text-gray-700">
            {contact.avatar ||
              contact.name
                ?.split(' ')
                .map((n) => n[0])
                .join('')}
          </div>
        )}
      </div>

      <div className="flex-1 p-4 relative">
        <button className="absolute top-4 right-4 p-1.5 rounded-md bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600 border border-blue-200">
          <Pencil size={20} />
        </button>

        <h2 className="text-xl font-bold mb-2">{contact.name}</h2>

        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-500" />
            {contact.email}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            {contact.address}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-500" />
            {contact.phone}
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-gray-500" />
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {contact.website}
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-2">
          <Building2 size={18} className="mt-1 text-gray-500" />
          <div>
            <p className="font-semibold text-sm">{contact.company?.name}</p>
            <p className="text-gray-500 text-xs truncate">
              {contact.company?.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
