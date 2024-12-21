package com.Placement_preparation.Controller;

import com.Placement_preparation.Service.ResponseDto;
import com.Placement_preparation.Service.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/responses")
@CrossOrigin
public class ResponseController {
    @Autowired
    private ResponseService responseService;
    @PostMapping
    public int submitResponses(@RequestBody List<ResponseDto> responses) {
// Assume userId is passed as part of the request body
        Long userId = responses.get(0).getUserId();
        return responseService.calculateScore(userId, responses);
    }
}
