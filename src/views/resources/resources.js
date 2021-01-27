import React from 'react';

//Style Sheet
import './resources.css'
import {getAllResources} from "./resourceList";
import {Button} from "../../components/button/button";
import {useState} from "react";
import TopNav from "../../components/topnav/topnav";

export function ExpandButton(props){

    let {expanded,setExpand} = props;

    function toggleExpand(e){

        console.log(e.target);

        const element = e.target;



        if(!expanded){
            setExpand(1);

            setTimeout( function(){
                element.scrollIntoView({behavior: 'smooth'})
            },100);
        }
        else{
            setExpand(0);
        }
    }

    return(
        <Button text={!expanded ? 'Expand' : 'Hide'}
                iconType={!expanded ? 'downArrow' : 'upArrow'}
                click={toggleExpand}
        />
    )

}

export function Resource(props){

    const resource = props.resource;
    const [resourceExpand,expandResource] = useState(0);

    const noIFrame = resource.noIframe;

    function contentByType(){
        switch(resource.type){
            case('org'):
            case('pub'):
            case('article'):
            case('info'):
            case('people'):
            case('bus'):
                return(
                    <div className={'resourceExpanded'}>
                        <iframe src={resource.link} title={resource.name}/>
                        <Button text={'Explore'} extLink={`${resource.link}`} iconType={'rightArrow'}/>
                    </div>
                )
            break;

            case('video'):
                return(
                    <iframe width="560"
                            height="315"
                            src={resource.embedLink}
                            frameBorder="0"
                            allow="accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture"
                            allowFullScreen>

            </iframe>
                )
        }
    }

    return(
        <div className={'resourceWrap'}>

            <div className={'sectionHead'}>
                <h5 className={'label'}>{resource.name}</h5>
                {
                    !noIFrame ?
                        <ExpandButton expanded={resourceExpand} setExpand={expandResource} />
                        :
                        <Button text={'Explore'} extLink={`${resource.link}`} iconType={'rightArrow'}/>
                }

            </div>

            {
                resourceExpand ?
                    contentByType()
                    :''
            }

        </div>
    )
}

export function TypeCategory(props){

    const resourceType = props.resourceType;
    const [typeExpand,expandType] = useState(0);

    function renderResources(resourceList){

        return resourceList.map( resource =>  <Resource resource={resource} /> )
    }

    return(
        <div className={'resourceTypeWrap'}>

            <div className={'sectionHead'}>
                <h4 className={'label'}>{resourceType.label}</h4>
                <ExpandButton expanded={typeExpand} setExpand={expandType} />
            </div>

            {
                typeExpand ?
                    <div className={'resourceListWrap'}>
                        {renderResources(resourceType.list)}
                    </div>
                    :''
            }
        </div>
    )
}

export function AgeCategory(props){

    const ageCategory = props.ageCategory;
    const [ageExpand, expandAge] = useState(0);

    function resourceTypeCategories(ageCategoryListObj){

        return Object.keys(ageCategoryListObj).map( resourceTypeKey =>{

            const resourceType = ageCategoryListObj[resourceTypeKey];

            return <TypeCategory resourceType={resourceType} />
        })
    }

    return (
        <div className={'ageCategoryWrap'}>

            <div className={'sectionHead'}>
                <h3 className={'label'}>{ageCategory.label}</h3>
                <ExpandButton expanded={ageExpand} setExpand={expandAge}/>
            </div>

            {
                ageExpand ?
                    <div className={`typeCategoryListWrap`}>
                        {resourceTypeCategories(ageCategory.list)}
                    </div>
                    : ''
            }

        </div>
    )
}

export function RegionResources(props){

    const [regionExpand, expandRegion] = useState(0);

    const [typeExpand, expandType] = useState(0);

    function ageCategories(regionListObj) {

        return Object.keys(regionListObj).map(ageCategoryKey => {

            let ageCategory = regionListObj[ageCategoryKey];

            return <AgeCategory ageCategory={ageCategory}/>
        })
    }
    function subRegions(subregionListObj){

        console.log(subregionListObj);

        return Object.keys(subregionListObj).map( subregion =>{

            console.log(subregion);

            return <RegionResources region={subregionListObj[subregion]}/>
        })
    }

    return(
        <div className={'regionResourcesWrap'}>

            <div className={'sectionHead'}>
                <h2 className={'label'}>{props.region.label}</h2>
                <ExpandButton expanded={regionExpand} setExpand={expandRegion}/>
            </div>

            {
                regionExpand ?
                    <div className={'ageCategoryListWrap'}>
                        {ageCategories(props.region.resources)}
                    </div>
                    :''
            }
            {
                props.region.subregions ?
                    <div className={'subRegionListWrap'}>
                        {subRegions(props.region.subregions)}
                    </div>
                    :''
            }

        </div>
    )
}

export function Resources(props){

    function resourceBody(){

        const resourceList = getAllResources();

        console.log(resourceList);

        return resourceList.map( region =>{
            return <RegionResources region = {region}/>
        })
    }

    return(
        <div className={'resourcePageWrap'}>

            <TopNav language={props.language} page={'resources'}/>

            <div className={'resourcesWrap controlBox'}>

                <h1 className={'label'}>Resources</h1>

                <div className={'regionListWrap'}>

                    {resourceBody()}

                </div>

            </div>

        </div>
    )
}