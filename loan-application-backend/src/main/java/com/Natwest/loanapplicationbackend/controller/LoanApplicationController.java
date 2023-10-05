package com.Natwest.loanapplicationbackend.controller;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import com.Natwest.loanapplicationbackend.services.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicationService;

    @PostMapping("/apply-for-loan")
    public ResponseEntity<LoanApplication> applyForLoan(@RequestBody LoanApplication loanApplication) {
        LoanApplication savedApplication = loanApplicationService.applyForLoan(loanApplication);
        return ResponseEntity.ok(savedApplication);
    }

    @GetMapping("/loan-history")
    public List<LoanApplication> getAllLoanHistory() {
        return loanApplicationService.getAllLoans();
    }

    @GetMapping("/loan-history/{id}")
    public ResponseEntity<LoanApplication> getLoanById(@PathVariable String id) {
        Optional<LoanApplication> loanApplication = loanApplicationService.getLoanById(id);
        if (loanApplication.isPresent()) {
            return ResponseEntity.ok(loanApplication.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/loan-history/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable String id) {
        loanApplicationService.deleteLoan(id);
        return ResponseEntity.noContent().build();
    }
}
