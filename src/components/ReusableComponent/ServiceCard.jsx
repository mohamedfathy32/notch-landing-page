import { motion } from "framer-motion";
import { Card, CardContent } from "@mui/material";
import RocketLaunch from '@mui/icons-material/RocketLaunch';
export default function ServiceCard({ title, description, icon }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full md:w-[40%] lg:w-[30%]"
        >
            <Card
                className="rounded-3xl shadow-lg border min-h-[390px] border-gray-200 bg-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                elevation={3}
            >
                <CardContent className="flex flex-col gap-6 items-center">
                    <div className="text-blue-600 bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 flex items-center justify-center rounded-full shadow-xl">
                        {icon || <RocketLaunch size={36} />}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
                    <p className="text-gray-500 text-sm md:text-base text-center ">{description}</p>
                </CardContent>
            </Card>
        </motion.div>

    );
};
