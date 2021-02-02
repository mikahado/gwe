import React from 'react';

//Style Sheet
//import './resources.css'
import './resources2.css';
import {getAllResources} from "./resourceList";
import {Button} from "../../components/buttons/buttons";
import {useState} from "react";
import TopNav from "../../components/topnav/topnav";



export function Resource(props){

    const resource = props.resource;

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
                        <iframe src={resource.link} title={resource.name} onLoad={console.log('iframe complete')}/>
                        <Button text={'Explore'} extLink={`${resource.link}`} iconType={'rightArrow'}/>
                    </div>
                )
            break;

            case('video'):
                return(
                    <iframe src={resource.embedLink}
                            className={'videoIframe'}
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
        <Button text={resource.name} extLink={resource.link} class={'resourceButton'}/>
    )
}

export function renderResources(resourceList){

    return resourceList.map( resource =>  <Resource resource={resource} /> )
}

export function TypeCategory(props){

    const resourceType = props.resourceType;

    return(
        <div className={'typeWrap'} id={resourceType.id}>

            <h4 className={'label'}>{resourceType.label}</h4>

            <ul className={'resourceList'}>
                {renderResources(resourceType.list)}
            </ul>

        </div>
    )
}

export function AgeCategory(props){

    const ageCategory = props.ageCategory;

    function resourceTypeCategories(ageCategoryListObj){

        return Object.keys(ageCategoryListObj).map( resourceTypeKey =>{

            const resourceType = ageCategoryListObj[resourceTypeKey];

            return <TypeCategory resourceType={resourceType} />
        })
    }

    return (
        <div className={'ageWrap'} id={props.ageCategory.id}>

            <h3 className={'label'}>{ageCategory.label}</h3>

            {
                Object.keys(ageCategory.list).length > 1 ?

                    <div className={`typeList`}>
                        {resourceTypeCategories(ageCategory.list)}
                    </div>
                    :
                    <div className={'resourceList'}>
                        {renderResources( ageCategory.list[ Object.keys(ageCategory.list)[0] ].list )}
                    </div>
            }



        </div>
    )
}

export function RegionResources(props){

    function ageCategories(regionListObj) {

        return Object.keys(regionListObj).map(ageCategoryKey => {

            let ageCategory = regionListObj[ageCategoryKey];

            return <AgeCategory ageCategory={ageCategory}/>
        })
    }
    function subRegions(subregionListObj){

        return Object.keys(subregionListObj).map( subregion =>{

            return <RegionResources region={subregionListObj[subregion]}/>
        })
    }

    return(
        <div id={props.region.id} className={'regionWrap'}>

            <h2 className={'label'}>{props.region.label}</h2>

            <div className={'ageList'}>
                {ageCategories(props.region.resources)}
            </div>
            {
                props.region.subregions ?
                    <div className={'subRegionList'}>
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

                <div className={'regionList'}>

                    {resourceBody()}

                </div>

            </div>

        </div>
    )
}