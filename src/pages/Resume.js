import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Rating from "@mui/lab/Rating";

import "../styles/Resume.css"

import NavBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import yellowAiLogo from "../assets/yellow_ai.png";
import amazonLogo from "../assets/Amazon_icon.svg";
import oxariLogo from "../assets/oxari_logo.jpeg";

export default function Resume() {

    return (
        <Box>
            <NavBar/>
            <Timeline position="alternate" style={{ marginBottom: "60px" }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot  sx={{ color: "black" }} variant="outlined">
                            <img src={oxariLogo} className="Timeline-company-logo" alt="Oxari"/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h5" style={{color: '#304361'}}>
                            Oxari <span style={{fontSize: '10px'}}>Nov'22-Present</span>
                        </Typography>
                        <Typography style={{color: '#000000', fontSize: '16px', marginBottom: '35px'}}>
                            Working Student - Software Development Engineer
                        </Typography>
                        <Box sx={{fontSize: '12px'}}>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> React.js<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Python<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> FastAPI<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Azure Databricks<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> MongoDB<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Azure BlobStorage<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot  sx={{ color: "black" }} variant="outlined">
                            <img src={amazonLogo} className="Timeline-company-logo" alt="Amazon"/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h5" style={{color: '#304361'}}>
                            Amazon <span style={{fontSize: '10px'}}>May'22-Nov'2022</span>
                        </Typography>
                        <Typography style={{color: '#000000', fontSize: '16px', marginBottom: '35px'}}>
                            Software Development Engineer Intern
                        </Typography>
                        <Box sx={{fontSize: '12px'}}>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> React.js<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Python<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Node.js<br/>
                            <Rating name="read-only" value={5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Typescript<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> DynamoDB<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> GraphQL<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> S3<br/>
                            <Rating name="read-only" value={5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> AWS Lambda<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> AppSync<br/>
                            <Rating name="read-only" value={3} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> SageMaker<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> AWS CDK<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ height: '200px'}}/>
                        <TimelineDot sx={{ color: "black" }} variant="outlined">
                            <img src={yellowAiLogo} className="Timeline-company-logo" alt="Yellow.ai"/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '15px', px: 2, marginBottom: '20px'}}>
                        <Typography variant="h5" style={{color: '#304361'}}>
                            Yellow.ai <span style={{fontSize: '10px'}}>Dec'19-Sep'2021</span>
                        </Typography>
                        <Typography style={{color: '#000000', fontSize: '16px', marginBottom: '35px'}}>
                            Software Engineer
                        </Typography>
                        <Box sx={{fontSize: '12px'}}>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Node.js<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> React.js<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> HTML<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> CSS<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> JavaScript<br/>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> MongoDB<br/>
                            <Rating name="read-only" value={4} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Redis<br/>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly/><br/>
                            <FiberManualRecordIcon sx={{fontSize: '12px'}}/> Elastic Search<br/>
                            <Rating name="read-only" value={3} precision={0.5} readOnly/><br/>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Footer/>
        </Box>
    );
}

