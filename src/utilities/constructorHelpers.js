import discussionCharacters from "../data/discussions/discussionCharacters/discussionCharacters";
import discussionPages from "../data/discussions/discussionPages";
import { MultiLingual } from "../data/model/multiLingual";
//import pageText from "../data/pageText";
import translationsSpa from "../data/books/translationsSpa";
import {discussionPagesFra} from "../data/discussions/DiscussionPagesFra";
import {discussionPagesSpa} from "../data/discussions/discussionPagesSpa";
import {translationsFra} from "../data/books/translationsFra";

export function assembleBookPages(contentId, endPage) {
  const contentPages = [];

  for (let page = 1; page <= endPage; page++) {
    contentPages.push({
      img: `${process.env.PUBLIC_URL}/assets/book/${contentId}/pages/${page}.jpg`,
      audio: new MultiLingual(
        `${process.env.PUBLIC_URL}/assets/book/${contentId}/audio/eng/${page}.mp3`,
        `${process.env.PUBLIC_URL}/assets/book/${contentId}/audio/spa/${page}.mp3`
      ),
      translation: new MultiLingual(
        null,
        translationsSpa[contentId] ? translationsSpa[contentId][page] : null,
        translationsFra[contentId] ? translationsFra[contentId][page] : null
      ),
      text: null,
    });
  }
  return contentPages;
}

export function assembleDiscussionPages(contentId) {
  let pagesData = discussionPages[contentId];
  let special = `${process.env.PUBLIC_URL}/assets/discussion/${contentId}/special.png`;

  function checkForCharacterImg(img) {
    if (Object.keys(discussionCharacters).includes(img)) {
      return discussionCharacters[img];
    } else {
      return false;
    }
  }
  function processPageImgData(pageImgData) {
    if (!pageImgData.length) {
      //pageImgData = noGraphic;
    }

    const convertedImages = [];

    if (Array.isArray(pageImgData)) {
      pageImgData.forEach((image) => {
        if (image === "SPECIAL") {
          convertedImages.push(special);
        } else if (checkForCharacterImg(image)) {
          convertedImages.push(checkForCharacterImg(image));
        } else {
          convertedImages.push(image);
        }
      });
    } else {
      if (checkForCharacterImg(pageImgData)) {
        convertedImages.push(checkForCharacterImg(pageImgData));
      } else {
        convertedImages.push(pageImgData);
      }
    }

    return convertedImages;
  }
  function processPageTextData(pageTextData) {
    const assembledPageText = new MultiLingual(
      pageTextData.eng,
      pageTextData.spa,
      pageTextData.fra
    );
    return assembledPageText;
  }

  let contentPages = [];

  // Assemble Cover Page Data
  contentPages.push({
    img: [special],
    audio: new MultiLingual(
      `${process.env.PUBLIC_URL}/assets/discussion/emptyAudio.mp3`
    ),
    text: null,
  });

  // Assemble Additional Page Data
  for (let page = 2; page <= Object.keys(pagesData).length; page++) {
    let pageData = pagesData[page];

    let fraPageText, spaPageText;
    if (discussionPagesFra[contentId]){
      fraPageText = discussionPagesFra[contentId][page];
    }
    if (discussionPagesSpa[contentId]){
      spaPageText = discussionPagesSpa[contentId][page];
    }

    let pageTextData = {
      eng: pageData.text,
      spa: spaPageText,
      fra: fraPageText
    }

    contentPages.push({
      img: processPageImgData(pageData.images),
      text: processPageTextData(pageTextData),
      audio: new MultiLingual(
        `${process.env.PUBLIC_URL}/assets/discussion/${contentId}/audio/eng/${page}.mp3`
      ),
    });
  }

  return contentPages;
}

export function assembleBookPreloads(pageData, format) {
  const preloads = [];

  for (let i = 0; i < pageData.length; i++) {
    let preload;

    if (format === "img") {
      preload = pageData[i].img;
    } else if (format === "audio") {
      preload = pageData[i].audio;
    }

    preloads.push(preload);
  }

  return preloads;
}

export function assembleDiscussionPreloads(pageData, format) {
  function checkUniquePreload(string, preloadsArray) {
    return !preloadsArray.includes(string);
  }

  const preloads = [];

  for (let i = 0; i < pageData.length; i++) {
    if (format === "img") {
      pageData[i].img.forEach((imgData) => {
        let image;

        if (typeof imgData === "string") {
          image = imgData;
        } else if (imgData.hasOwnProperty("img")) {
          image = imgData.img;
        }

        if (checkUniquePreload(image, preloads)) {
          preloads.push(image);
        }
      });
    } else if (format === "audio") {
      preloads.push(pageData[i].audio);
    }
  }

  return preloads;
}
