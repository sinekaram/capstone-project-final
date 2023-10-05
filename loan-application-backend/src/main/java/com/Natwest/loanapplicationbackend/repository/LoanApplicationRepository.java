package com.Natwest.loanapplicationbackend.repository;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicationRepository extends MongoRepository<LoanApplication, String> {
}
