import React from "react";
import { ResourceCategory } from "../resources";
import { sortAllResources} from "../resourceData";

import pageText from "../../../data/pageText";

export function ResourceList(props) {
  //const filteredResources = filterResources(props.filters);

  const filteredResources = sortAllResources();

  return (
    <div className={"position-relative"}>
      <section className={"d-flex flex-column align-items-center "}>
        <h2 className={'sectionHeader'}>{pageText.labels.resources.kidsAction.get(props.language)}</h2>

          {filteredResources.kids.length ? (
            filteredResources.kids.map((categoryObj) => {
              return (
                <ResourceCategory
                  heading={categoryObj.heading}
                  resourceList={categoryObj.list}
                  key={`Kids ${categoryObj.heading} Resource Category`}
                  language={props.language}
                />
              );
            })
          ) : (
            <p className={"resourceError"}>
              No resources from this section match your filters. Select more categories to see more results.
            </p>
          )}

      </section>

      <section className={"d-flex flex-column align-items-center "}>
        <h2 className={'sectionHeader'}>{pageText.labels.resources.learnMore.get(props.language)}</h2>
        {filteredResources.other.length ? (
          filteredResources.other.map((categoryObj) => {
            return (
              <ResourceCategory
                heading={categoryObj.heading}
                resourceList={categoryObj.list}
                key={`${categoryObj.heading} Resource Category`}
                language={props.language}
              />
            );
          })
        ) : (
          <p className={"resourceError"}>
            No resources from this section match your filters. Select more categories to see more results.
          </p>
        )}
      </section>
    </div>
  );
}
