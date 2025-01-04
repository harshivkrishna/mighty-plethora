import { useState } from "react";
import { motion } from "framer-motion";

const Specials = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Specials1",
      heading: "Architecto ut aperiam autem id",
      subtitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      description:
        "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: "assets/bg-side3.jpeg",
    },
    {
      id: 2,
      title: "Specials2",
      heading: "Et blanditiis nemo veritatis excepturi",
      subtitle:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      description:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque.",
      image: "assets/bg-side4.jpeg",
    },
    {
      id: 3,
      title: "Specials3",
      heading: "Impedit facilis occaecati odio neque aperiam sit",
      subtitle: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga.",
      description:
        "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut.",
      image: "assets/bg-side3.jpeg",
    },
    {
      id: 4,
      title: "Specials4",
      heading: "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
      subtitle: "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      description:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit.",
      image: "assets/bg-side5.jpeg",
    },
    {
      id: 5,
      title: "Specials5",
      heading: "Est eveniet ipsam sindera pad rone matrelat sando reda",
      subtitle: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
      description:
        "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui.",
      image: "assets/bg-side4.jpeg",
    },
  ];

  // Animations
  const tabAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const contentAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 1 } },
  };

  return (
    <section id="specials" className="specials bg-black py-12 overflow-hidden">
       <div className="text-container heading-container mb-9  relative ">
        <span className="sub-title">SPECIALS</span>
        <h1 className="text-5xl text-white font-bold mt-2">Check Our Specials</h1>
      </div>
      <div className="container mx-auto px-4">
        

        <div className="flex flex-wrap">
          {/* Tabs */}
          <div className="w-full lg:w-1/4">
            <ul className="flex flex-col space-y-4">
              {tabs.map((tab, index) => (
                <motion.li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-link cursor-pointer p-4 transition-all duration-300 font-semibold text-sm ${
                    activeTab === tab.id
                      ? "active text-black bg-[#cda45e] border-r-2 border-[#cda45e]"
                      : "text-white border-r-2 border-[#cda45e] hover:text-[#cda45e]"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  variants={tabAnimation}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  {tab.title}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    className="tab-pane active grid grid-cols-1 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={contentAnimation}
                    whileInView="visible"
                  >
                    {/* Text Content */}
                    <div className="col-span-2 px-7 details">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {tab.heading}
                      </h3>
                      <p className="italic text-gray-400 mb-4">{tab.subtitle}</p>
                      <p className="text-gray-500">{tab.description}</p>
                    </div>

                    {/* Image */}
                    <motion.div
                      className="text-center"
                      initial="hidden"
                      animate="visible"
                      variants={imageAnimation}
                      whileInView="visible"
                    >
                      <img
                        src={tab.image}
                        alt={tab.heading}
                        className="rounded-lg shadow-lg img-fluid"
                      />
                    </motion.div>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
