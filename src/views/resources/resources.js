import React from "react";

// Sub-Components
import { Button } from "../../components/buttons/buttons";
import { ResourceList } from "./resourceList/resourceList";

//Methods & Data
import pageText from "../../data/pageText";
import {getFilterState } from "./resourceData";

//Style Sheet
import "./resources2.css";

//import { Filters } from "./filters/filters";
//import { ResourceMessage } from "./resourceMessage/resourceMessage";

export function Resource(props) {
  const resource = props.resource;

  return (
    <Button
      text={resource.name}
      extLink={resource.link}
      class={"resourceButton"}
    />
  );
}

export function renderResources(resourceList) {
  return resourceList.map((resource) => <Resource resource={resource} />);
}

export function TypeCategory(props) {
  const resourceType = props.resourceType;

  return (
    <div className={"typeWrap"} id={resourceType.id}>
      <h4 className={"label"}>{resourceType.label}</h4>

      <ul className={"resourceList"}>{renderResources(resourceType.list)}</ul>
    </div>
  );
}

export function AgeCategory(props) {
  const ageCategory = props.ageCategory;

  function resourceTypeCategories(ageCategoryListObj) {
    return Object.keys(ageCategoryListObj).map((resourceTypeKey) => {
      const resourceType = ageCategoryListObj[resourceTypeKey];

      return <TypeCategory resourceType={resourceType} />;
    });
  }

  return (
    <div className={"ageWrap"} id={props.ageCategory.id}>
      <h3 className={"label"}>{ageCategory.label}</h3>

      {Object.keys(ageCategory.list).length > 1 ? (
        <div className={`typeList`}>
          {resourceTypeCategories(ageCategory.list)}
        </div>
      ) : (
        <div className={"resourceList"}>
          {renderResources(
            ageCategory.list[Object.keys(ageCategory.list)[0]].list
          )}
        </div>
      )}
    </div>
  );
}

export function RegionResources(props) {
  function ageCategories(regionListObj) {
    return Object.keys(regionListObj).map((ageCategoryKey) => {
      let ageCategory = regionListObj[ageCategoryKey];

      return <AgeCategory ageCategory={ageCategory} />;
    });
  }
  function subRegions(subregionListObj) {
    return Object.keys(subregionListObj).map((subregion) => {
      return <RegionResources region={subregionListObj[subregion]} />;
    });
  }

  return (
    <div id={props.region.id} className={"regionWrap"}>
      <h2 className={"label"}>{props.region.label}</h2>

      <div className={"ageList"}>{ageCategories(props.region.resources)}</div>
      {props.region.subregions ? (
        <div className={"subRegionList"}>
          {subRegions(props.region.subregions)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export function ResourceCategory(props) {
  const { resourceList, heading } = props;

  console.log(heading);

  return (
    <div className={"resourceCategory"}>
      <h3 className={"heading"}>
        {
          pageText.labels.resources.types[ heading[0] ].get(props.language)
          + ' - '
          + pageText.labels.resources.regions[ heading[1] ].get(props.language)
        }
      </h3>
      <div className={"d-flex flex-column flex-wrap justify-content-center align-items-start w-100 p-3"}>
        {resourceList.length ? (
          resourceList.map((resource) => {
            return <a target={"_blank"} href={resource.link} rel={"noopener noreferrer"}>{resource.name}</a>;
          })
        ) : (
          <p>
            No resources match your filters. Check more boxes above to see more
            results
          </p>
        )}
      </div>
    </div>
  );
}

export class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilters: false,
      filters: getFilterState(),
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.showAll = this.showAll.bind(this);
    this.hideAll = this.hideAll.bind(this);
  }
  changeFilter(category, name, value) {
    const newFilterState = this.state;
    newFilterState.filters[category][name] = value;
    this.setState(newFilterState);
  }
  toggleFilters() {
    this.setState({showFilters: !this.state.showFilters})
  }
  showAll() {
    const allFilters = this.state.filters;
    Object.keys(allFilters).forEach((categoryKey) => {
      Object.keys(allFilters[categoryKey]).forEach((filterKey) => {
        allFilters[categoryKey][filterKey] = true;
      });
    });
    this.setState({ filters: allFilters });
  }
  hideAll() {
    const allFilters = this.state.filters;
    Object.keys(allFilters).forEach((categoryKey) => {
      Object.keys(allFilters[categoryKey]).forEach((filterKey) => {
        allFilters[categoryKey][filterKey] = false;
      });
    });
    this.setState({ filters: allFilters });
  }

  render() {

    return (
      <div className={"resourcePageWrap container-fluid"}>
        <div className={'row'}>
          <div className={'col'}>
            <h1 className={'pageTitle'}>{pageText.pageTitles.resources.get(this.props.language)}</h1>
          </div>
        </div>

        <div className={'row'}>
          {/*
          <div className={'col-md col-lg-auto'}>
            <div className={'filterColumn d-flex flex-column align-items-center'}>
              <ResourceMessage
                filters={this.state.filters}
                toggleFilters={this.toggleFilters}
                showFilters={this.state.showFilters}
              />

              {
                this.state.showFilters ?
                  <Filters
                    filters={this.state.filters}
                    changeFilter={this.changeFilter}
                    showAll={this.showAll}
                    hideAll={this.hideAll}
                    hideFilters={this.toggleFilters}
                  />
                  :null
              }
            </div>
          </div>
          */}

          <div className={'col'}>
            <div className={'pageBody p-md-2'}>

              <ResourceList filters={this.state.filters} language={this.props.language}/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
