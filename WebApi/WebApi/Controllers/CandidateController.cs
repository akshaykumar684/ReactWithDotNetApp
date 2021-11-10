using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidateRepository _candidateRepository;
        public CandidateController(ICandidateRepository candidateRepository)
        {
            _candidateRepository = candidateRepository;
        }
        // GET: api/<CandidateController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidate>>> GetCandidates()
        {
            return  Ok(await _candidateRepository.GetCandidates());
        }

        // GET api/<CandidateController>/5
        [HttpGet("{id}",Name ="GetCandidate")]
        public async Task<ActionResult<Candidate>> GetCandidate(int id)
        {
            return Ok(await _candidateRepository.GetCandidate(id));
        }

        // POST api/<CandidateController>
        [HttpPost]
        public async Task<ActionResult> CreateCandidate([FromBody] Candidate candidate)
        {
            if(candidate == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(!await _candidateRepository.CreateCandidate(candidate))
            {
                ModelState.AddModelError("", $"Something went wrong.Candidate {candidate.Fullname} can't be created");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetCandidate", new { candidate.Id }, candidate);
        }

        // PUT api/<CandidateController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCandidate(int id, [FromBody] Candidate candidate)
        {
            if(candidate == null || id != candidate.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }

            if(!await _candidateRepository.UpdateCandidate(candidate))
            {
                ModelState.AddModelError("", $"Something went wrong.Candidate {candidate.Fullname} can't be updated");
                return StatusCode(500, ModelState);
            }
            return CreatedAtRoute("GetCandidate", new { candidate.Id }, candidate);
        }

        // DELETE api/<CandidateController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCandidate(int id)
        {
            if(!await _candidateRepository.DeleteCandidate(id))
            {

                ModelState.AddModelError("", $"Something went wrong.Candidate can't be deleted");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
