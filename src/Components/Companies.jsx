import Company from "./Company";

function Companies(props) {
  const { companies, currentCompany, setCurrentCompany } = props;

  return (
    <div className="flex max-md:flex-row max-md:justify-evenly max-md:mt-6 md:flex-col gap-4">
      {companies.map((company, index) => {
        return (
          <Company
            key={index}
            company={company}
            SetCurrentCompany={setCurrentCompany}
            selectedCompany={currentCompany === company}
          />
        );
      })}
    </div>
  );
}

export default Companies;
