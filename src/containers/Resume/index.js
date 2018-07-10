import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';
import './style.css';
import PersonData from '../../data/resume.json';
import ResumeComponent from '../../components/Resume';
import HeroComponent from '../../components/Hero';

export default class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.person = PersonData;
    this.myRef = React.createRef();
    this.saveResume = this.saveResume.bind(this);
  }

  componentDidMount() {
    const opt = {
      margin: 0,
      filename: 'Lukasz_Wasilewski.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    this.portfolioElement = html2pdf()
      .from(this.myRef.current)
      .set(opt)
      .toPdf();
  }

  saveResume() {
    //this.portfolioElement.save();
    this.portfolioElement.outputPdf('dataurlnewwindow');
  }

  render() {
    return (
      <div className="page-wrapper">
        <HeroComponent
          title="Online Resume"
          subtitle="Ultimate resume for explaining everything about my professional experience."
        />
        <div className="page container">
          <div ref={this.myRef} className="page-inner">
            <ResumeComponent person={this.person} />
          </div>
        </div>
        <div className="pdf-btn">
          <button className="button is-primary" onClick={this.saveResume}>
            Save as PDF
          </button>
        </div>
      </div>
    );
  }
}
