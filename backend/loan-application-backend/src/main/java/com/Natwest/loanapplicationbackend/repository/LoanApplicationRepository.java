package com.Natwest.loanapplicationbackend.repository;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicationRepository extends MongoRepository<LoanApplication, String> {

<<<<<<< HEAD
    LoanApplication findByemail(String email);
=======
>>>>>>> 1ebf46c2859a3f61b093d1eaa057c42ab202b346
}
