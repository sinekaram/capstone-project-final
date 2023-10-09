package com.Natwest.loanapplicationbackend.services;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import com.Natwest.loanapplicationbackend.repository.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    public LoanApplication applyForLoan(LoanApplication loanApplication) {
        return loanApplicationRepository.save(loanApplication);
    }

    public List<LoanApplication> getAllLoans() {
        return loanApplicationRepository.findAll();
    }

    public Optional<LoanApplication> getLoanById(String id) {
        return loanApplicationRepository.findById(id);
    }

    public void deleteLoan(String id) {
        loanApplicationRepository.deleteById(id);
    }

    public Response<LoanApplication> getLoanByEmail(String email) {
        return loanApplicationRepository.findByemail(email);
    }
}



