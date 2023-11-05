function Company(props) {
  if (props.selectedCompany) {
    return (
   
      <span className="text-cyan-500 text-center md:pl-32 md:ml-4 md:shadow-[-3px_0px_rgb(6,182,212)] max-md:border-b-[3px] max-md:border-b-cyan-500">
        {props.company}
      </span>
    );
  }
  return (
    
    <span
      className="text-black text-center hover:text-cyan-500 max-md:hover:underline max-md:hover:underline-offset-8 max-md:hover:decoration-4 md:ml-4 md:pl-32 md:hover:shadow-[-3px_0px_rgb(6,182,212)]"
      onClick={() => {
        props.SetCurrentCompany(props.company);
      }}
    >
      {props.company}
    </span>
  );
}

export default Company;
