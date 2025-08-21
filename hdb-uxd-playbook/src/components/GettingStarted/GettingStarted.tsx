import styles from "./gettingStarted.module.css";

const guidesData = [
  {
    id: "designers",
    title: "Designers",
    description: "Explore our design foundations and our Figma UI kit",
  },
  {
    id: "developers",
    title: "Developers",
    description: "Explore our implementations and find installation guides",
  },
  {
    id: "product-owners",
    title: "Product Owners",
    description:
      "Understand how our design system scales products consistently.",
  },
];

export const GettingStarted = () => {
  return (
    <div className={styles.container}>
      <p className={styles.introText}>
        In our digital world, every interaction we have with our customer is an
        opportunity to shape them into positive user experiences. How we present
        ourselves online, from the way we speak in our communications and the
        images we use, is a direct reflection of our values and personality. To
        bring thee life accurately, this playbook will help you project the
        Housing Development Board (HDB) brand with confidence and consistency
        across our digital services.
      </p>
      <div className={styles.guides}>
        <span className={styles.title}>Guides</span>
        <p className={styles.introText}>
          Understand how we design, build and plan our digital products here at
          HDB.
        </p>
        <div className={styles.card}>
          {guidesData.map((element) => {
            return (
              <div key={element.id} className={styles.block}>
                <div className={styles.blockTitle}>{element.title}</div>
                <div className={styles.blockDescription}>
                  {element.description}
                </div>
              </div>

              //   <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              //     <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
              //       <span className="text-sm text-slate-600 font-medium">
              //         {element.title}
              //       </span>
              //     </div>

              //     <div className="p-4">
              //       <p className="text-slate-600 leading-normal font-light">
              //         {element.description}
              //       </p>
              //     </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
