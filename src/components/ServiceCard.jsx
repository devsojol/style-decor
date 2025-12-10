import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img
          src={service.image}
          alt={service.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>Cost: BDT {service.cost}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/services/${service.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
