import Title from "./title";
import { servicesData } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, className, serviceTitle, serviceText } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={className}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serviceTitle}</h4>
                <p className="service-text">{serviceText}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
