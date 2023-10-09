package com.Natwest.loanapplicationbackend.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document("loan_applications")
@AllArgsConstructor
@NoArgsConstructor
@ToString
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
    private String interestRateType;


}
