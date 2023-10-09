package com.Natwest.springbootbankingUser.Controller;

import com.Natwest.springbootbankingUser.Entity.PaymentInfo;
import com.Natwest.springbootbankingUser.Repository.PaymentRepo;
import com.Natwest.springbootbankingUser.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/banking")
@CrossOrigin("http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/payment")
    public ResponseEntity<PaymentInfo> addPayment(@RequestBody PaymentInfo paymentInfo){
        PaymentInfo savedPayment = paymentService.addPayment(paymentInfo);
        return new ResponseEntity<>(savedPayment, HttpStatus.OK);
    }
    @GetMapping("/payment/{email}")
    public Optional<PaymentInfo> getPaymentByEmail(@PathVariable String email){
        return paymentService.getPaymentByEmail(email);
    }


}
