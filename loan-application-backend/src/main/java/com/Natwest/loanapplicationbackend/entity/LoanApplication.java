package com.Natwest.loanapplicationbackend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("loan_applications")
public class LoanApplication {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String dob;
    private String aadhaarCard;

    private String mobileNumber;
    private String email;
    private Double monthlyIncome;
    private Double loanAmount;
    private Integer loanTerm;
    private String typeOfLoan;
    private boolean approvalStatus = false;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAadhaarCard() {
        return aadhaarCard;
    }

    public void setAadhaarCard(String aadhaarCard) {
        this.aadhaarCard = aadhaarCard;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(Double monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public Double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(Double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public Integer getLoanTerm() {
        return loanTerm;
    }

    public void setLoanTerm(Integer loanTerm) {
        this.loanTerm = loanTerm;
    }

    public String getTypeOfLoan() {
        return typeOfLoan;
    }

    public void setTypeOfLoan(String typeOfLoan) {
        this.typeOfLoan = typeOfLoan;
    }

    public boolean isApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

    @Override
    public String toString() {
        return "LoanApplication{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob='" + dob + '\'' +
                ", aadhaarCard='" + aadhaarCard + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", email='" + email + '\'' +
                ", monthlyIncome=" + monthlyIncome +
                ", loanAmount=" + loanAmount +
                ", loanTerm=" + loanTerm +
                ", typeOfLoan='" + typeOfLoan + '\'' +
                ", approvalStatus=" + approvalStatus +
                '}';
    }
}
