import ServiceCard from "./ReusableComponent/ServiceCard";

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { services } from "../data/data";

const Services = () => {
  return (

    <div id="services" className="py-16 bg-blue-50 ">
      <h2 className="text-2xl font-bold text-center pb-10">Our Services</h2>
      <div className="flex justify-around gap-3 flex-wrap">

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services; 