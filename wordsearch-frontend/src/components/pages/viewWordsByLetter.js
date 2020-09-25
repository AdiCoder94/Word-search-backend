import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as wordActions from '../../redux_components/actions/wordActions/wordActionCreator';

import { backendURL, frontendURL, viewwordbyletterURL } from '../../config/constants';
import MemberHeader from "../Components/memberHeader";
import WordByLetterListComponent from "../Components/wordByLetterListComponent";
import Spinner from "../Components/spinner";

function ViewWordsByLetter(props){
  const { match: { params } } = props
  const [words, setWords] = useState([])
  const [triggerComponent, setTriggerComponent] = useState(false)
  let recievedWords, viewWordInDetailComponent;

  // useEffect(() => {
  //   fetch(`${backendURL}${viewwordbyletterURL}`, { 
  //     method: 'POST',
  //     headers:{
  //       'Access-Control-Allow-Origin': `${frontendURL}`,
  //       'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       letter: `${params.letter}` })})
  //     .then(res => res.json())
  //     .then(json => setWords(json))
  //     .then(() => setTriggerComponent(true))
  //     .catch(err => console.log(err))}, [triggerComponent])

  useEffect(() => { setTriggerComponent(true) })


  if(triggerComponent === true){
    let dispatch = useDispatch()
    dispatch(wordActions.initiateFetchWordByLetter())
    // recievedWords = words.obj
    // viewWordInDetailComponent = (
    //   <React.Fragment>
    //     <WordByLetterListComponent  />
    //     </React.Fragment> )
        
      
      
      }
  // else viewWordInDetailComponent = (
  //   <React.Fragment>
  //     <div className='loader-container flex-row'>
  //     <Spinner />
  //     <p className='pleasewait-txt'>Please wait...</p></div></React.Fragment>)

  return(
    <React.Fragment>
      <MemberHeader />
      <div className="site-article-container">
        <h2 className='section-heading'>{params.letter}</h2>
        <hr />
        <div className='form-article-container flex-row'>
          {/* { viewWordInDetailComponent } */}
          
          sldfjllsak
          
          </div></div></React.Fragment>)}

export default ViewWordsByLetter;
