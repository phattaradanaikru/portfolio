import About from "../About";
import { data as educationData } from "../../contents/education";
import { data as projectData } from "../../contents/project";
import ContentContainer from "../../components/ContentContainer";

const RightSection = ( { onInitial } ) => {
  return (/* text-left grid gap-y-4 px-5 */
    <div className="text-left grid gap-y-14 lg:gap-y-40 px-5"> 
      <About
        title="About"
        onInitial={onInitial} 
      />
      <ContentContainer
        onInitial={onInitial}
        title="Education"
        data={educationData}
      />
      <ContentContainer
        onInitial={onInitial}
        title="Projects"
        data={projectData}
      />
    </div>
  )
}

export default RightSection